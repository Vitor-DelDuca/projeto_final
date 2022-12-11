<template>
    <div class="register">
        <h1>Criar uma conta</h1>
        <p><input type="text" placeholder="Email" v-model="email" /></p>
        <p><input type="password" placeholder="Password" v-model="password" /></p>
        <p><button @click="register">Enviar</button></p>
        <p><button @click="signInWithGoogle">Login com Google</button></p>
    </div>
</template>

<script setup>

    import { ref } from "vue";
    import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
    import { useRouter } from 'vue-router'

    const email = ref("");
    const password = ref("");
    const router = useRouter()

    const register = () => {
        const auth = getAuth()
        createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((data) => {
            console.log("registrado com sucesso!");
            console.log(auth.currentUser);
            router.push('/feed')
        })
        .catch((error) => {
            console.log(error.code);
            alert(error.message);
        });
    };

    const signInWithGoogle = () => {

    };

</script>