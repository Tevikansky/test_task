const forms = document.querySelectorAll('form')

const sendForm = ({
  formId
}) => {
  const form = formId;
  const statusBlock = document.createElement('div');
  const statusLoad = document.createElement('div');
  const loadText = "Loanding..."
  const errorText = "Error..."
  const successText = "Thank you! A member of our team will getback to you shortly!"
  const timer = (input) => {
    setTimeout(() => {
      statusBlock.remove();
    }, 5000)
  }


  const validate = (list) => {
    let success = true
    list.forEach((input) => {
      if (
        ((input.id === "name") && (input.value.length < 2)) ||
        ((input.id === "email") && (input.value.length < 5)) ||
        ((input.id = "message") && (input.value.length < 5))
      ) {
        input.style.border = "1px solid red";
        setTimeout(() => {
          input.style.border = " 1px solid #dfdfdf"
        }, 5000)
        success = false
      }
    })
    return success
  }

  
const sendData = (data) => {
  return fetch('../server.php', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
}

  const submitForm = () => {
    const formElements = form.querySelectorAll('[type=text] , [type=email], [id=message]')
    const formBody = {}
    statusBlock.style = 'font-style: normal font-weight: 700; font-size: 24px; line-height: 29px; display: flex; align-items: center; text-align: center; color: #000; justify-content: center; padding-top: 15px;'

    statusBlock.textContent = loadText

    form.append(statusBlock)
    form.append(statusLoad)

    formElements.forEach((val) => {
      formBody[val.id] = val.value
    })

    if (validate(formElements)) {
      sendData(formBody).then(data => {
          statusBlock.textContent = successText
          statusLoad.remove()
          formElements.forEach(input => {
            input.value = "";
          })
        })
        .catch(error => {
          statusBlock.textContent = errorText
        })
    } else {
      alert('Data entered incorrectly!')
      statusLoad.remove()

      statusBlock.textContent = errorText
    }
    timer()
  }

  try {
    if (!form) {
      throw new Error('Error')
    }
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      submitForm();
    })
  } catch (error) {
    console.log(error.message)
  }


}

forms.forEach((e) => {
  sendForm({
    formId: e
  });
})

