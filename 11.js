
const formData = {
    name: '',
    email: '',
    phone: '',
    date: '',
    comments: '',
  
    printData() {
      console.log(`
        Имя: ${this.name}
        E-mail: ${this.email}
        Телефон: ${this.phone}
        Дата: ${this.date}
        Комментарий: ${this.comments}
      `);
    }
  };
  
  
  function submitForm(event) {
    event.preventDefault(); 
  
  
    formData.name = document.getElementById('name').value;
    formData.email = document.getElementById('email').value;
    formData.phone = document.getElementById('phone1').value;
    formData.date = document.getElementById('date').value;
    formData.comments = document.getElementById('comments').value;
  
    
    if (!formData.name || !formData.email || !formData.comments) {
      alert('Пожалуйста, заполните все обязательные поля.');
      return;
    }
  
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)) {
      alert('Некорректный адрес электронной почты.');
      return;
    }
  
    
    formData.printData();

    
    document.getElementById('contactForm').reset();
  }
  
  
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  