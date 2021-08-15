export default {
  methods: {
    detectAnswer(answer) {
      if (answer === 0) {
        return {
          text: 'Ожидает ответа',
          color: 'rgba(255, 153, 0, 1)',
        }
      } else if (answer === 1) {
        return {
          text: 'Ответили',
          color: 'rgba(44, 209, 91, 1)',
        }
      }
    },
  },
}
