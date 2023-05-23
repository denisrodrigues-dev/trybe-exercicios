const btnSubmit = document.getElementById('submit-btn');

const handleEventButton = () => {
  btnSubmit.addEventListener('click', (event) => {
    event.preventDefault();
  });
};

const checkImage = () => {
  const checkAgreement = document.getElementById('agreement');
  checkAgreement.addEventListener('click', (event) => {
    btnSubmit.disabled = !event.target.checked;
  });
};

handleEventButton();
checkImage();
