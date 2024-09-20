from flask import Flask, request
from flask_cors import CORS
import requests
import json
import pandas as pd
import wikipediaapi as wa

wiki = wa.Wikipedia(
    user_agent="Proj1 (merlin@example.com)",
    language="en",
    extract_format=wa.ExtractFormat.WIKI,
)

app = Flask(__name__)
CORS(app)


@app.route("/")
def hello_world():
    return "Komthru Flask API"


@app.route("/get-wiki", methods=['POST'])
def getWikiInfo(imgSize=800, txtLength=700):
    q = request.data.decode("utf-8")[1:-1] #remove quotes
    print(q)
    reds = requests.get(
        "http://en.wikipedia.org/w/api.php?action=query&format=json&titles="
        + q
        + "&redirects"
    )
    redid = list(json.loads(reds.text)["query"]["pages"].keys())[0]
    r2 = requests.get(
        "http://en.wikipedia.org/w/api.php?action=query&pageids="
        + redid
        + "&prop=pageimages&format=json&pithumbsize="
        + str(imgSize)
    )
    s = r2.text[r2.text.find("https") :]
    e = s[: s.find('",')]

    txt = wiki.page(q).text
    f = txt.find(" is ")
    if len(e) > 0 and len(txt) > 0:
        return {"img": e, "txt": txt[f + 1 : f + 1 + txtLength]}
    else:
        r2 = requests.get(
            "http://en.wikipedia.org/w/api.php?action=query&titles="
            + q.split(",")[0]
            + "&prop=pageimages&format=json&pithumbsize="
            + str(imgSize)
        )
        s = r2.text[r2.text.find("https") :]
        e = s[: s.find('",')]
        txt = wiki.page(q.split(",")[0]).text
        f = txt.find(" is ")
        if len(e) > 0 and len(txt) > 0:
            return {"img": e, "txt": txt[f + 1 : f + 1 + txtLength]}
        else:
            return {"img": "none", "txt": ""}


@app.route("/get-wikis", methods=['POST'])
def getWikiInfos(imageSize=800, txtLength=700):
    data = request.data.decode("utf-8")
    qarr = data.split("|")
    if len(qarr) > 8:
        return []
    else:
        return [getWikiInfo(q, imageSize, txtLength) for q in qarr]


if __name__ == "__main__":
    app.run()
