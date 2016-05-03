export const activateMainMenu = () => ({ type: 'ACTIVATE_MENU' });
export const deactivateMainMenu = () => ({ type: 'DEACTIVATE_MENU' });
export const toggleMainMenu = () => ({ type: 'TOGGLE_MENU' });

export const activateLightbox = (id) => ({ type: 'ACTIVATE_LIGHTBOX', id });
export const deactivateLightbox = () => ({ type: 'DEACTIVATE_LIGHTBOX' });

export const showSuccessMessage = () => ({ type: 'SHOW_SUCCESS_MESSAGE' });
