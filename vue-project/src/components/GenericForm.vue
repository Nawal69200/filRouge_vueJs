<script>
export default {
  name: 'GenericForm',
  inheritAttrs: false,
  props: {
    item: { type: Object, required: true },
    modelValue: [String, Boolean, File, Number]
  },
  emits: ['update:modelValue'],
  computed: {
    localValue: {
      get() {
        return this.modelValue
      },
      set(value) {
        this.$emit('update:modelValue', value)
      }
    }
  },
  methods: {
    handleFile(event) {
      this.$emit('update:modelValue', event.target.files[0] || null)
    }
  }
}
</script>

<template>
  <div class="mb-3">
    <!-- Label sauf pour checkbox -->
    <label v-if="item.type !== 'checkbox'" :for="item.model" class="form-label">
      {{ item.label }} <span v-if="item.required" class="text-danger">*</span>
    </label>

    <!-- Champ générique -->
    <component
      v-if="!['checkbox','file'].includes(item.type)"
      :is="item.type === 'textarea' ? 'textarea' : (item.type === 'select' ? 'select' : 'input')"
      class="form-control"
      :id="item.model"
      :type="item.type !== 'textarea' && item.type !== 'select' ? item.type : null"
      :required="item.required"
      v-model="localValue"
      :rows="item.rows || null"
    >
      <option 
        v-if="item.type === 'select'" 
        value="" 
        disabled 
        selected
      >
        -- Sélectionnez --
      </option>
      <option 
        v-for="option in item.options || []" 
        :key="option.value" 
        :value="option.value"
      >
        {{ option.text }}
      </option>

    </component>

    <!-- Champ fichier -->
    <input
      v-else-if="item.type === 'file'"
      type="file"
      class="form-control"
      :id="item.model"
      :required="item.required"
      @change="handleFile"
    />

    <!-- Champ checkbox -->
    <div v-else class="form-check">
      <input
        class="form-check-input"
        type="checkbox"
        :id="item.model"
        v-model="localValue"
      />
      <label :for="item.model" class="form-check-label">
        {{ item.label }} <span v-if="item.required" class="text-danger">*</span>
      </label>
    </div>
  </div>
</template>
