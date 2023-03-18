import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import Connection from '@renderer/models/connection'

export const useConnectionStore = defineStore('connection', {
    state: () => ({
        activeConnection: '',
        connections: useStorage('connections', new Map<string, Connection>())
    }),

    actions: {
        addConnection(connection: Connection) {
            this.connections.set(connection.name, connection)
        },

        deleteConnection(name: string) {
            if (name !== this.activeConnection && this.connections.has(name)) {
                this.connections.delete(name)
            }
        },

        selectConnection(name: string) {
            if (this.connections.has(name)) {
                this.activeConnection = name
            }
        }
    }
})