<script setup lang="ts">
import { computed, reactive, ref } from "vue";

interface ContactContent {
  email: string;
  fields: {
    name: string;
    company: string;
    email: string;
    interest: string;
    message: string;
    submit: string;
  };
  options: readonly string[];
}

const props = defineProps<{
  contact: ContactContent;
}>();

const form = reactive({
  name: "",
  company: "",
  email: "",
  interest: props.contact.options[0] ?? "",
  message: "",
});

const submitted = ref(false);

const mailtoHref = computed(() => {
  const subject = encodeURIComponent(`Domonor inquiry: ${form.interest}`);
  const body = encodeURIComponent(
    [
      `Name: ${form.name}`,
      `Company: ${form.company}`,
      `Email: ${form.email}`,
      `Interest: ${form.interest}`,
      "",
      form.message,
    ].join("\n"),
  );

  return `mailto:${props.contact.email}?subject=${subject}&body=${body}`;
});

const submit = () => {
  submitted.value = true;
  window.location.href = mailtoHref.value;
};
</script>

<template>
  <form class="contact-form reveal" @submit.prevent="submit">
    <label>
      <span>{{ contact.fields.name }}</span>
      <input v-model="form.name" name="name" autocomplete="name" required />
    </label>

    <label>
      <span>{{ contact.fields.company }}</span>
      <input v-model="form.company" name="company" autocomplete="organization" />
    </label>

    <label>
      <span>{{ contact.fields.email }}</span>
      <input v-model="form.email" name="email" type="email" autocomplete="email" required />
    </label>

    <label>
      <span>{{ contact.fields.interest }}</span>
      <select v-model="form.interest" name="interest">
        <option v-for="option in contact.options" :key="option" :value="option">{{ option }}</option>
      </select>
    </label>

    <label class="full">
      <span>{{ contact.fields.message }}</span>
      <textarea v-model="form.message" name="message" rows="5" required></textarea>
    </label>

    <button class="button button-primary full" type="submit">{{ contact.fields.submit }}</button>
  </form>
</template>
