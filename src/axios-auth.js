import axios from 'axios'

//create will return the new insatnce
const instance =axios.create({
    baseURL:'https://vueaxios2.firebaseio.com'
})

instance.defaults.headers.common['SOMETHING']='something'
export default instance
