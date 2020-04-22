import { LocalStorageViernesComponent } from '../app/components/views/local-storage-viernes/local-storage-viernes.component' 

export default {
    title: 'Local Storange Test',
    component: LocalStorageViernesComponent,
};

export const Default = () => ({
    component: LocalStorageViernesComponent,
    props:{}
})

Default.story = {
    name: 'local storange test component',
    parameters: { notes: 'Local storange test: este ejemplo guarda/elimina/muestra una variable guardada en memoria local' }
}