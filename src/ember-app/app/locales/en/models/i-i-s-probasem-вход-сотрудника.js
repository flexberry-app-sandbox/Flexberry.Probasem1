export default {
  projections: {
    ВходСотрудникаE: {
      сотрудник: {
        __caption__: 'Сотрудник',
        фИО: {
          __caption__: 'ФИО'
        },
        должность: {
          __caption__: '',
          наимДолжности: {
            __caption__: 'Должность'
          },
          карта: {
            __caption__: '',
            кодКарты: {
              __caption__: ''
            }
          }
        }
      }
    }
  },
  validations: {
    сотрудник: {
      __caption__: 'Сотрудник'
    },
    регистрВхода: {
      __caption__: 'регистрВхода'
    }
  }
};
