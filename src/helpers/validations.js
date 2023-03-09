export const validationLogin = (values) => {
  let errors = {};
  if (!values.email) {
    errors.email = "El email es obligatorio";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "El email no es válido";
  } else if (values.email.length > 30) {
    errors.email = "El email no debe poseer más de 30 caracteres";
  }

  if (!values.password) {
    errors.password = "La contraseña es obligatoria";
  } else if (values.password.length < 8) {
    errors.password = "La contraseña debe tener como mínimo 8 caracteres";
  } else if (values.password.length > 30) {
    errors.password = "La contraseña no debe poseer más de 30 caracteres";
  }
  return errors;
};

export const validationAddForm = (values) => {
  let errors = {};
  //nombre
  if (!values.name) {
    errors.name = "El nombre es obligatorio";
  } else if (!/^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/i.test(values.name)) {
    errors.name = "El nombre no es válido";
  } else if (values.name.length > 30) {
    errors.name = "El nombre no debe poseer más de 30 caracteres";
  }

  //apellido
  if (!values.lastname) {
    errors.lastname = "El apellido es obligatorio";
  } else if (!/^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/i.test(values.lastname)) {
    errors.lastname = "El apellido no es válido";
  } else if (values.lastname.length > 30) {
    errors.lastname = "El apellido no debe poseer más de 30 caracteres";
  }

  //expediente
  if (!values.expediente) {
    errors.expediente = "El expediente es obligatorio";
  } else if (!/^[0-9]+$/i.test(values.expediente)) {
    errors.expediente = "El expediente no es válido";
  } 
  else if (values.expediente.length > 6) {
    errors.expediente = "El expediente no debe poseer más de 6 caracteres";
  }

   //dni
  if (!values.dni) {
    errors.dni = "El dni es obligatorio";
  } else if (!/^[0-9]+$/i.test(values.dni)) {
    errors.dni = "El dni no es válido";
  } else if (values.dni.length > 8) {
    errors.dni = "El dni no debe poseer más de 8 caracteres";
  }

  //edad
  if (!values.age) {
    errors.age = "La edad es obligatoria";
  } else if (!/^[0-9]+$/i.test(values.age)) {
    errors.age = "La edad ingresada no es válida";
  } else if (values.age.length > 2) {
    errors.age = "La edad no debe poseer más de 2 caracteres";
  }


  //email
  if (!values.email) {
    errors.email = "El email es obligatorio";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "El email no es válido";
  } else if (values.email.length > 30) {
    errors.email = "El email no debe poseer más de 30 caracteres";
  }

  //cel
  if (!values.cel) {
    errors.cel = "El celular es obligatorio";
  } else if (!/^[0-9]+$/i.test(values.cel)) {
    errors.cel = "El celular ingresado no es válido";
  } else if (values.cel.length > 13) {
    errors.cel = "El celular no debe poseer más de 13 caracteres";
  }

   //course
  if (!values.course) {
    errors.course = "El curso es obligatorio";
  } 


  return errors;
};