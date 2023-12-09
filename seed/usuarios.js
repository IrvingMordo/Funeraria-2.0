import bcrypt from 'bcrypt'
const usuarios = [
    {
        nombre: 'Irving',
        email: '',
        confirmado: 1,
        password: bcrypt.hashSync('password', 10)
    }
]

export default usuarios