import { defineStore } from 'pinia'
import axios from 'axios'
import { useValidation } from '../composition/validation'

const { validateField } = useValidation()

export const useWizardStore = defineStore('wizard-form-store', {
  state: () => ({
    steps: 3,
    step: 1,
    firstName: '',
    lastName: '',
    countryField: {
      selectedCountry: null,
      countries: [],
      isLoading: false
    },
    childrenField: {
      selected: '',
      options: ['Yes', 'No']
    },
    hobbiesField: {
      selected: [],
      options: ['Hiking', 'Music', 'Programming']
    },
    carDriverField: {
      selected: '',
      options: ['Yes', 'No']
    },
    drivingExperiance: '',
    errors: {}
  }),

  getters: {
    renderJsonData(state) {
      const data = {
        first_name: state.firstName,
        'last_name:': state.lastName,
        'country:': state.countryField.selectedCountry?.iso3,
        has_children: state.childrenField.selected === 'Yes' ? true : false,
        hobbies: state.hobbiesField.selected,
        page: state.step,
        car_driver: state.carDriverField.selected,
        driving_experiance: state.drivingExperiance ? parseFloat(state.drivingExperiance) : 0
      }

      const json = JSON.stringify(data)

      function formatJson(jsonString) {
        let indentLevel = 0
        let formattedJson = ''
        let isInString = false

        for (let i = 0; i < jsonString.length; i++) {
          const char = jsonString[i]

          if (char === '"' && jsonString[i - 1] !== '\\') {
            isInString = !isInString
          }

          if (!isInString) {
            if (char === '{' || char === '[') {
              formattedJson += char + '\n' + ' '.repeat((indentLevel + 1) * 2)
              indentLevel++
            } else if (char === '}' || char === ']') {
              indentLevel--
              formattedJson += '\n' + ' '.repeat(indentLevel * 2) + char
            } else if (char === ',') {
              formattedJson += char + '\n' + ' '.repeat(indentLevel * 2)
            } else {
              formattedJson += char
            }
          } else {
            formattedJson += char
          }
        }

        formattedJson = formattedJson.replace(/\[\s+\]/g, '[]') // Remove extra space inside empty arrays
        return formattedJson
      }

      return formatJson(json)
    }
  },

  actions: {
    nextStep() {
      switch (this.step) {
        case 1: {
          this.step++
          break
        }
        case 2: {
          this.step++
          break
        }
        case 3: {
          this.step++
          break
        }
        default: {
          break
        }
      }
    },

    backStep() {
      if (this.step === 1) return
      else this.step--
    },

    onChangeCountry(value) {
      this.countryField.selectedCountry = value
      this.errorHandler('countryField', this.countryField.selectedCountry)
    },

    onChangeChildren(value) {
      this.childrenField.selected = value
      this.errorHandler('childrenField', this.childrenField.selected)
    },

    onChangeHobbies(value) {
      this.hobbiesField.selected = value
      this.errorHandler('hobbiesField', this.hobbiesField.selected)
    },

    onChangeCarDriver(value) {
      if (value === 'No') {
        this.drivingExperiance = ''
        this.errors.drivingExperiance = null
      }
    },

    errorHandler(inputName, value) {
      const inputErrors = validateField(inputName, value)

      if (inputErrors && inputErrors.length) this.errors[inputName] = inputErrors
      else this.errors[inputName] = null
    },

    async fetchCountriesData() {
      if (this.countryField.countries.length === 0) {
        this.countryField.isLoading = true

        await axios
          .get('https://countriesnow.space/api/v0.1/countries/states')
          .then((response) => {
            const transformedData = response.data.data.map((item) => ({
              iso3: item.iso3,
              name: item.name
            }))

            this.countryField.countries = transformedData
            this.countryField.isLoading = false
          })
          .catch((error) => {
            console.error('Error fetching data:', error)
            this.countryField.isLoading = false
          })
      }
    }
  }
})
