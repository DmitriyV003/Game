<template>
  <div>
    <g-message
      v-for="item in data"
      :key="item.id"
      :data="item"
      :store-action="storeAction"
    />
    />
  </div>
</template>

<script>
import GMessage     from '~/components/Message'

export default {
  name: 'GMessageTree',
  components: { GMessage },
  props: {
    data: {
      type: Array,
      required: true,
    },
    storeAction: {
      type: String,
      required: true,
    }
  },
}
</script>
