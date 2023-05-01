export const injectedJavaScript = `
function hideHeaderToggle() {var headerToggle = document.getElementsByClassName("et_pb_section"), i;for (i = 0; i < headerToggle.length; i += 1) {headerToggle[i].style.background = "black";};}; hideHeaderToggle();   function changeTextcolorToggle() {var textToggle = document.getElementsByClassName("et_pb_module_header"), i;for (i = 0; i < textToggle.length; i += 1) {textToggle[i].style.color = "white";};}; changeTextcolorToggle();    

const filterablePortfolio = document.querySelector('.et_pb_filterable_portfolio');
const activeFilterLinks = filterablePortfolio.querySelectorAll('.et_pb_portfolio_filters li a');

activeFilterLinks.forEach(link => {
  link.style.backgroundColor = '#000';
});

const textPortfolio = document.querySelector('.et_pb_module_header');
const textFilterLinks = textPortfolio.querySelectorAll('.et_pb_module_header');

textFilterLinks.forEach(link => {
  link.style.color = '#fff';
});
`;

export const runBeforeFirst = `
window.isNativeApp = true;
true; // note: this is required, or you'll sometimes get silent failures
`;