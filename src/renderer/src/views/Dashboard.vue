<template>
    <section id="organization" v-if="(step === 'organization')">
        <div class="mb-4">
            <h5>Organization</h5>
        </div>

        <div class="mb-3">
            <select class="form-select" v-model="organizationStore.organization">
                <option v-for="organization in organizationStore.organizations" v-bind:value="organization[1]"
                    v-bind:selected="(organization[0] === organizationStore.organization?.mspId)">
                    {{ organization[0] }}
                </option>
            </select>
        </div>

        <div class="mb-3">
            <button class="btn btn-primary form-control" v-bind:disabled="(!organizationStore.organization)"
                @click="selectStep('identity')">Next</button>
        </div>

        <div class="mb-3">
            <router-link class="btn btn-primary form-control" to="/organizations/create">Create New Organization</router-link>
        </div>
    </section>

    <section id="identity" v-if="(step === 'identity')">
        <div class="mb-4">
            <h5>Identity</h5>
        </div>

        <identity-select class="mb-3"></identity-select>

        <div class="mb-3">
            <button class="btn btn-primary form-control" v-bind:disabled="(!identityStore.identity)"
                @click="selectStep('contract')">Next</button>
        </div>

        <div class="mb-3">
            <router-link class="btn btn-primary form-control" to="/identities/create">Create New Identity</router-link>
        </div>

    </section>
</template>

<script setup lang="ts">
import IdentitySelect from '@renderer/components/IdentitySelect.vue'
import OrganizationSelect from '@renderer/components/OrganizationSelect.vue'

import { useIdentityStore } from '@renderer/stores/identity.store'
import { useOrganizationStore } from '@renderer/stores/organization.store'

const organizationStore = useOrganizationStore()
const identityStore = useIdentityStore()

let step = 'organization'

function selectStep(next: string) {
    console.log(next)
    step = next
}

</script>