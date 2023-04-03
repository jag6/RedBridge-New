const uuid = self.crypto.randomUUID();
const token = document.querySelectorAll('.token');
token.forEach((input) => input.value = uuid);