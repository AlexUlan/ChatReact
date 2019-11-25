const validation = ({ isAuth, values, errors }) => {
  const rules = {
    email: value => {
      if (!value) {
        errors.email = "Введите E-mail";
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        errors.email = "Непарвельный E-mail";
      }
    },
    password: value => {
      if (!value) {
        errors.password = "Ведите пароль";
      } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/i.test(value)) {
        errors.password = isAuth ? "Неверный пароль" : "Слишком легкий пароль";
      }
    },
    password2: value => {
      if(!value){
        errors.password2 = "Ведите пароль";
      }
    }
    ,
    name: value => {
      if (!value) {
        errors.name = "Ведите ваше имя";
      }
    }
  };

  Object.keys(rules).forEach(key => rules[key] && rules[key](values[key]));
};

export default validation;
