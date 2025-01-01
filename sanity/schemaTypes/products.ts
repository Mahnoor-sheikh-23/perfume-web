import { defineField, defineType } from 'sanity'

export const products = defineType({
  name: 'post',//this should be same to quesry 
  title: 'All Product',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      type: 'string',

    }),
    defineField({
      name: 'price1',
      type: 'number',

    }),
    defineField({
      name: 'price2',
      type: 'number',

    }),
    defineField({
      name: 'peroff',
      type: 'number',

    }),
    defineField({
      name: 'vendor',
      type: 'string',

    }),
    defineField({
      name: 'SKU',
      type: 'number',

    }),
    defineField({
      name: 'sold',
      type: 'number',

    }),
    defineField({
      name: 'watching',
      type: 'number',

    }),
    defineField({
      name: 'imageUrl',
      type: 'url', // This will allow you to paste an image URL
      title: 'Image URL',
      validation: (rule) => rule.required().uri({
        scheme: ['http', 'https'], // Ensures valid HTTP/HTTPS URLs
      }),
    }),
    defineField({
      name: 'category',
      type: 'string',
      title: 'Category',
      options: {
        list: [
          { title: 'Men', value: 'men' },
          { title: 'All', value: 'all' },
          { title: 'Women', value: 'women' },
          { title: 'Unisex', value: 'unisex' },
          { title: 'Gift Set', value: 'giftset' },
          { title: 'Carolina Herrera', value: 'carolina' },
          { title: 'Cartier', value: 'cartier' },
          { title: 'Jean Paul Gaultier Perfume', value: 'jeanpaul' },
          { title: 'Creed', value: 'creed' },
          { title: 'Chanel Perfumes', value: 'chanel' },
          { title: 'Davidoff Perfume', value: 'davidoff' },
          { title: 'Paco Rabanne Perfumes', value: 'pacorabanne' },
          { title: 'Hugo Boss Perfumes', value: 'boss' },
          { title: 'Calvin Klein', value: 'klein' },
          { title: 'Christian Dior', value: 'christian' },
          { title: 'Versace Perfumes', value: 'versace' },
          { title: 'Tom Ford Perfumes', value: 'tomford' },
        ],
      },
    }),
    defineField({
      name: 'brand',
      type: 'string',
      title: 'Brand',
      options: {
        list: [
          { title: 'Carolina Herrera', value: 'carolina' },
          { title: 'Cartier', value: 'cartier' },
          { title: 'Jean Paul Gaultier Perfume', value: 'jeanpaul' },
          { title: 'Paco Rabanne Perfumes', value: 'pacorabanne' },
          { title: 'Creed', value: 'creed' },
          { title: 'Chanel Perfumes', value: 'chanel' },
          { title: 'Davidoff Perfume', value: 'davidoff' },
          { title: 'Paco Rabanne Perfumes', value: 'pacorabanne' },
          { title: 'Hugo Boss Perfumes', value: 'boss' },
          { title: 'Calvin Klein', value: 'klein' },
          { title: 'Christian Dior', value: 'christian' },
          { title: 'Versace Perfumes', value: 'versace' },
          { title: 'Tom Ford Perfumes', value: 'tomford' },
        ],
      },
    }),

  ],
})