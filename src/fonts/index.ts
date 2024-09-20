import { Orelega_One, Outfit } from 'next/font/google'
 
export const orelega = Orelega_One({
  weight: '400',
  subsets: ['latin'],
})
 
export const outfit = Outfit({
    weight: '400',
    subsets: ['latin'],
  })

export const orelega_class = orelega.className;
export const outfit_class = outfit.className;
