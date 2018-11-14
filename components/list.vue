<template>
  <ul>
    <item v-for="item in items" :key="item.id" 
    :title=item.title 
    :byline=item.byline
    :date=item.date
    :image=item.image
    />
  </ul>
</template>

<script>
import item from '~/components/list-item.vue'

export default {
  components: {
    item
  },
  data: () => {
    return {
      items: [
        { 
          title: 'Page Not Found',
          byline: 'The amazing Sebastien',
          date: '14th of September 2018', 
          image: 'images/oa_GK_Page_Not_Found_05.jpg'
        },
        { title: 'Facetime Den Haag' },
        { title: 'Rae' },
        { title: 'Baobab' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
