<template>
    <div>
        <g-message 
            v-for="item in data"
            :key="item.id"
            :data="item" 
            @onAnswer="$store.dispatch('news/postCreateNewsComment')"
        />
        />
    </div>
</template>

<script>
import GMessage from '~/components/Message'
export default {
    name: 'GMessageTree',
    components: { GMessage },
    props: {
        data: {
            type: Array,
            required: true
        }
    }
}  
</script>
