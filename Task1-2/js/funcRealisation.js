const form = document.getElementById('form');
const submitButton = document.getElementById('submit-button');

const disableButton = () => {
	submitButton.setAttribute('disabled', true);
	submitButton.classList.add('disabled');
};

const enableButton = () => {
	submitButton.removeAttribute('disabled');
	submitButton.classList.remove('disabled');
};

const showAlert = (message, type) => {
	const alert = document.createElement('div');
	alert.classList.add('alert', `alert-${type}`);
	alert.textContent = message;

	form.prepend(alert);

	setTimeout(() => {
		alert.remove();
	}, 3000);
};

const sendForm = e => {
	e.preventDefault();

	disableButton();

	const formData = new FormData(form);

	fetch('https://formcarry.com/s/2-eqWanmX', {
		method: 'POST',
		body: formData,
	})
		.then(response => {
			if (response.ok || response.status === 406) {
				showAlert('Форма отправлена успешно!', 'success');
				form.reset();
			} else {
				showAlert('Произошла ошибка при отправке формы!', 'danger');
			}
		})
		.catch(error => {
			showAlert('Произошла ошибка при отправке формы!', 'danger');
		})
		.finally(() => {
			enableButton();
		});
};

form.addEventListener('submit', sendForm);
