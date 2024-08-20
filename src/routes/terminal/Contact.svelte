<script>
    import emailjs from "@emailjs/browser";
    import Social from "../../components/Widgets/Social.svelte";
    import { emailSent, emailFailed } from "../../Store/settings";

    const sendEmail = (event) => {
        emailjs
            .sendForm("service_44fxt6e", "contact_form", event.target, {
                publicKey: "6vhkAri7UravR_Udh",
            })
            .then(
                () => {
                    emailSent.set(true);
                },
                () => {
                    emailFailed.set(true);
                },
            );
    };
</script>

{#if !$emailSent && !$emailFailed}
    <div class="self-center w-2/3 p-px lg:w-1/2 persona-wrap bg-light-neon">
        <form
            on:submit|preventDefault={sendEmail}
            class="flex flex-col gap-2 p-5 lg:p-10 persona-wrap bg-darker-neon text-light-neon"
        >
            <label class="mb-px" for="name">Name:</label>
            <input
                class="contact-input"
                name="name"
                type="text"
                required
                minlength="1"
            />
            <label class="mb-px" for="email">Email:</label>
            <input class="contact-input" name="email" type="email" required />
            <label class="mb-px" for="name">Message:</label>
            <textarea
                class="mb-5 lg:mb-12 h-28 contact-input"
                name="message"
                required
                minlength="15"
            ></textarea>
            <input
                class="self-center px-10 py-2 font-bold cursor-pointer w-fit bg-light-neon text-darker-neon transition-class terminal-btn"
                type="submit"
            />
        </form>
    </div>
{:else}
    <div
        class="flex flex-col items-center self-center justify-center w-1/2 gap-5 p-px text-light-neon"
    >
        <p class="text-2xl">Thank you for sending email</p>
        <button
            on:click={() => emailSent.set(false)}
            class="px-10 py-2 font-bold bg-light-neon text-darker-neon transition-class terminal-btn"
            >Send another one</button
        >
    </div>
{/if}

{#if $emailFailed}
    <div
        class="flex flex-col items-center self-center justify-center w-1/2 gap-5 p-px text-primary-accent"
    >
        <p class="text-2xl">Sending failed</p>
        <button
            on:click={() => emailFailed.set(false)}
            class="px-10 py-2 font-bold bg-primary-accent text-darker-neon transition-class terminal-btn"
            >Try again</button
        >
    </div>
{/if}

<Social />

<style>
    .contact-input {
        background-color: transparent;
        outline: 1px solid var(--light-neon);
        padding: 5px;
    }

    @media only screen and (max-width: 990px) {
        .contact-input {
            width: 85%;
            outline: 1px solid var(--light-neon);
            padding: 3px;
        }
    }
</style>
