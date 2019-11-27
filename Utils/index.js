export const findTestAtrr = (component, attr) => {
    const container = component.find(`[data-test='${attr}']`);
    return container;
};
