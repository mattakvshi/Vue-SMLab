class FormSender {
	// Конструктор класса принимает форму и кнопку отправки в качестве аргументов
	constructor(form, submitButton, cancelButton) {
	  this.form = form;
	  this.submitButton = submitButton;
	  this.cancelButton = cancelButton;
  
	  // Привязываем методы к экземпляру класса, чтобы их можно было вызывать из обработчиков событий
	  this.disableButton = this.disableButton.bind(this);
	  this.enableButton = this.enableButton.bind(this);
	  this.showAlert = this.showAlert.bind(this);
	  this.sendForm = this.sendForm.bind(this);

	  // Создаем контроллер прерывания
	  this.controller = new AbortController();
	  this.signal = this.controller.signal;
	}
  
	// Метод для отключения кнопки отправки
	disableButton() {
	  this.submitButton.setAttribute('disabled', true);
	  this.submitButton.classList.add('disabled');
	}
  
	// Метод для включения кнопки отправки
	enableButton() {
	  this.submitButton.removeAttribute('disabled');
	  this.submitButton.classList.remove('disabled');
	}
  
	// Метод для показа всплывающего сообщения
	showAlert(message, type) {
	  const alert = document.createElement('div');
	  alert.classList.add('alert', `alert-${type}`);
	  alert.textContent = message;
  
	  this.form.prepend(alert);
  
	  setTimeout(() => {
		alert.remove();
	  }, 3000);
	}


	// Метод для валидации формы
	validateForm() {
		let isValid = true;
	
		// Проверяем, что все поля заполнены
		const inputs = this.form.querySelectorAll('input, textarea');
		inputs.forEach(input => {
			if (!input.value) {
			isValid = false;
			this.showAlert('Все поля должны быть заполнены!', 'danger');
			}
		});
	
		// Проверяем валидность email
		const emailInput = this.form.querySelector('input[type="email"]');
		if (!emailInput.value.match(/^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/)) {
		  isValid = false;
		  this.showAlert('Введите корректный email!', 'danger');
		}
	
		// Проверяем, что стоит галочка на checkbox
		const checkbox = this.form.querySelector('input[type="checkbox"]');
		if (!checkbox.checked) {
		  isValid = false;
		  this.showAlert('Необходимо согласиться с условиями!', 'danger');
		}
	
		return isValid;
	  }

		// Метод для отмены отправки формы
		abort() {
			console.log("In abort methods: " , this.controller)
			// Отменяем запрос `fetch`
			this.controller.abort();
		
			console.log("In abort methods: " , this.signal)
		  
			// Сбрасываем значение this.fetchPromise
			this.fetchPromise = null;
		  
			// Включаем кнопку отправки
			this.enableButton();
		  
			// Скрываем кнопку отмены
			this.cancelButton.style.display = 'none';
		}
  
	// Метод для отправки формы
	sendForm(e) {
		e.preventDefault();
	  
		if (!this.validateForm()) {
			document.getElementById('formT').scrollIntoView();
		  return;
		}
	  
		this.disableButton();
	  
		// Показываем кнопку отмены
		this.cancelButton.style.display = 'inline-block';
		
		// Создаем объект `FormData` из формы
		const formData = new FormData(this.form);
		console.log(formData);

		//this.controller = new AbortController();
		console.log("In sendForm methods: " , this.controller);
		console.log("In sendForm methods: " , this.signal);

		// Отправляем данные формы на сервер с помощью `fetch` с задержкой 2 сукунды
		setTimeout(() => {
			this.fetchPromise = fetch('https://formcarry.com/s/2-eqWanmX', {
			method: 'POST',
			body: formData,
			signal: this.signal
			})
		  .then(response => {
			console.log(response.status)
			// Проверяем статус ответа сервера
			if (response.ok || response.status === 406) {
			  // Если статус успешный, показываем сообщение об успешной отправке и сбрасываем форму
			  document.getElementById('formT').scrollIntoView();
			  this.showAlert('Форма отправлена успешно!', 'success');
			  this.form.reset();
			} else {
			  // Если статус неуспешный, показываем сообщение об ошибке
			  this.showAlert('Произошла ошибка при отправке формы!', 'danger');
			}
		  })
		  .catch(error => {
			// Если произошла ошибка при отправке запроса, показываем сообщение об ошибке
			this.showAlert('Произошла ошибка при отправке формы!', 'danger');
		  })
		  .finally(() => {
			// Вне зависимости от результата запроса, включаем кнопку отправки и скрываем кнопку отмены
			this.enableButton();
			this.cancelButton.style.display = 'none';

			// Создаем новый контроллер прерывания и назначаем его сигнал полю `signal`
  			this.controller = new AbortController();
  			this.signal = this.controller.signal;

			console.log("In finally block: ", this.controller, this.signal)
		  });
		}, 2000)
	}

	// Метод для инициализации класса
	init() {
	  // Добавляем обработчик события `submit` к форме
	  this.form.addEventListener('submit', this.sendForm);
	}
}


// Получаем элементы формы и кнопки отправки
const form = document.getElementById('form');
const submitButton = document.getElementById('submit-button');

//Кнопка отмены
const cancelButton = document.getElementById('cancel-button');

// Создаем экземпляр класса `FormSender` и передаем ему форму и кнопку отправки
const formSender = new FormSender(form, submitButton, cancelButton);

// Инициализируем класс, добавив обработчик события `submit` к форме
formSender.init();


//Обработка нажатя кнопки омены отправки
cancelButton.addEventListener('click', () => {
  // Отменяем отправку формы
  formSender.abort();
});


