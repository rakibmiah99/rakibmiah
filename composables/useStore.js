export const useStore = () => {
    const sectionStore = useState('section', () => {});
    const projectTitleStore = useState('project_title', () => {});
    const projectItemStore = useState('project_item');

    return {
        sectionStore,
        projectTitleStore,
        projectItemStore
    }
}