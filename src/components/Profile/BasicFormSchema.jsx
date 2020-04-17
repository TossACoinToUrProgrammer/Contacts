import * as Yup from "yup";

const BasicFormSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Must be longer than 2 characters")
    .max(20, "Nice try, nobody has a first name that long")
    ,
  lastName: Yup.string()
    .min(2, "Must be longer than 2 characters")
    .max(20, "Nice try, nobody has a last name that long")
    ,
  city: Yup.string()
    .min(2, "Must be longer than 2 characters")
    .max(30, "Try to put it in 30 letters")
    ,
  country: Yup.string()
    .min(2, "Must be longer than 2 characters")
    .max(30, "Try to put it in 30 letters")
    ,
  phoneNumber: Yup.string()
    .min(2, "Must be longer than 2 characters")
    .max(20, "Too long")
    ,
  email: Yup.string()
    //Проверяем, корректный ли адрес.
    //Если нет, то выводится сообщение в скобках
    .email("Invalid email address")
    .max(40, "Maximum 40 characters")
    //не сабмитим, если поле не заполнено
    ,
  website: Yup.string(),
});
export default BasicFormSchema;
