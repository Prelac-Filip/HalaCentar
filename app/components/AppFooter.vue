<script setup lang="ts">
const columns = [{
    label: 'Resursi',
    children: [{
        label: 'O nama',
        to: '/o-nama'
    }, {
        label: 'Za sve koji žele više',
        to: '/koji-zele-vise'
    }, {
        label: 'Cjenik',
        to: '/cjenik'
    }, {
        label: 'Galerija',
        to: '/galerija'
    }]
}, {
    label: 'Kontakt',
    children: [{
        label: '+385 91 234 5678',
        icon: 'fluent:call-20-regular',
        to: 'tel:+385912345678'
    }, {
        label: 'info@hala.com',
        icon: 'fluent:mail-20-regular',
        to: 'mailto:info@hala.com?subject=Upit%20za%20trening'
    }, {
        label: 'Ul. Milutina Barača, Rijeka, Hrvatska, 51000',
        icon: 'fluent:location-20-regular',
        to: 'https://maps.app.goo.gl/tc3GjXvSNL6u73TH7',
        target: '_blank'
    }]
}];

</script>

<template>
    <USeparator color="primary" size="sm" />

    <UFooter :ui="{ top: 'border-b border-default' }">
        <template #top>
            <UContainer>
                <UFooterColumns :columns="columns">
                    <template #left>
                        <div class="flex flex-row">
                            <AppLogo class="h-40 shrink-0" />
                            <div class="self-center text-muted text-sm">Hala centar nije samo prostor za trening – to je zajednica u kojoj svatko pronalazi svoje mjesto, bez obzira na ciljeve ili iskustvo.</div>
                        </div>
                    </template>
                </UFooterColumns>
            </UContainer>
        </template>

        <template #left>
            <p class="text-sm text-muted">
                Built by Filip Prelac • © {{ new Date().getFullYear() }}
            </p>
        </template>

        <template #right>
            <UButton to="https://www.linkedin.com/in/prelacfilip/" target="_blank" icon="simple-icons:linkedin"
                aria-label="Filip Prelac LinkedIn" color="neutral" variant="ghost" />
        </template>
    </UFooter>
</template>