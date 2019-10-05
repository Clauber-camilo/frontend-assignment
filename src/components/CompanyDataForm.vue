<template>
  <form class="data-form" @submit.prevent="handleForm">
    <div class="form-group" :class="{ '-error': $v.name.$error }">
      <label class="label">COMPANY NAME</label>
      <input
        type="text"
        v-model.trim="name"
        class="input"
        placeholder="e.g Your Company Name"
        @input="setFormVal('name', $event.target.value)"
      />

      <div class="error" v-if="!$v.name.required">* Field is required</div>
    </div>
    <div class="form-group" :class="{ '-error': $v.spend.$error }">
      <label class="label">COMPANY SPEND</label>
      <input
        type="text"
        v-model.trim="spend"
        v-currency="{ currency, autoDecimalMode: true, decimalLength: 3 }"
        class="input"
        placeholder="e.g $150,000"
        @input="setFormVal('spend', $event.target.value)"
      />

      <div class="error" v-if="!$v.spend.required">* Field is required</div>
    </div>
    <div class="form-group">
      <label class="label">Company Spend Ability</label>

      <div class="group" :class="{ '-error': $v.spend_min.$error }">
        <label class="label"> Min </label>
        <currency-input
          type="text"
          v-model.trim="spend_min"
          :auto-decimal-mode="true"
          :currency="currency"
          :decimal-length="decimalLength"
          class="input"
          placeholder="e.g $150,000"
          @input.native="setFormVal('spend_min', parseCurrencyVal($event.target.value))"
        />
        <div class="error" v-if="!$v.spend_min.required">* Field is required</div>
        <div class="error" v-if="!$v.spend_min.between">* Field don't have a valid value </div>
      </div>

      <div class="group" :class="{ '-error': $v.spend_max.$error }">
        <label class="label"> Max </label>
        <currency-input
          type="text"
          v-model.trim="spend_max"
          :auto-decimal-mode="true"
          :currency="currency"
          :decimal-length="decimalLength"
          class="input"
          placeholder="e.g $330,000"
          @input.native="setFormVal('spend_max', parseCurrencyVal($event.target.value))"
        />
        <div class="error" v-if="!$v.spend_max.minValue">* Field don't have a valid value </div>
      </div>
    </div>
  </form>
</template>

<script>
import { validationMixin } from "vuelidate";
import { CurrencyDirective, parseCurrency, CurrencyInput } from "vue-currency-input";
import { required, minValue, maxValue, sameAs, between } from "vuelidate/lib/validators";

export default {
  name: "company-data-form",
  mixins: [validationMixin],
  directives: {
    currency: CurrencyDirective
  },
  components: {CurrencyInput},
  data() {
    return {
      name: "",
      spend: "",
      spend_min: 0,
      spend_max: 0,
      notes: "",
      currency: 'USD',
      locale: 'en',
      decimalLength: 3
    };
  },
  validations() {
    return {
      name: {
        required
      },
      spend: {
        required
      },
      spend_min: {
        required,
        between: between(0, this.spend_max)
      },
      spend_max: {
        required,
        minValue: minValue(this.spend_min)
      }
    }
  },

  methods: {
    handleForm() {
      console.log("Sent");
    },
    setFormVal(field, value) {
      this[field] = value;
      this.$v[field].$touch();
    },
    parseCurrencyVal (val) {
      return parseCurrency(val, this.locale, this.currency)
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~Styles/settings/variables";
@import "~Styles/settings/mixins";

.label--extend {
  font-size: rem(11px);
  font-weight: bold;
  color: $grey;
  margin-bottom: 5px;
  text-transform: uppercase;
}

.input--extend {
  border-radius: 5px;
  border: 1px solid $border-color;
  padding: 10px 15px;
  font-size: rem(12px);

  &::placeholder {
    color: $border-color;
  }
}

.error--extend {
  color: $red-error;
  font-size: rem(11px);
  margin: 5px 0;
  display: none;
}

.data-form {
  > .form-group {
    display: grid;
    max-width: 50%;
    margin-bottom: 20px;

    &.-error {
      animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
      transform: translate3d(0, 0, 0);

      > .input {
        border-color: $red-error;
      }

      > .error {
        display: inherit;
      }
    }

    > .label {
      @extend .label--extend;
    }

    > .input {
      @extend .input--extend;
    }

    > .error {
      @extend .error--extend;
    }
  }

  > .form-group > .group {
    margin-top: 5px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas: "label input" "error error";
    column-gap: 20px;
    align-items: center;

    &.-error {
      animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
      transform: translate3d(0, 0, 0);

      > .input {
        border-color: $red-error;
      }

      > .error {
        display: inherit;
      }
    }

    > .label {
      @extend .label--extend;
      grid-area: label;
    }

    > .input {
      @extend .input--extend;
      grid-area: input;
    }

    > .error {
      @extend .error--extend;
      grid-area: error;
    }
  }

}

@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>