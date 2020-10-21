import React, { useCallback, useRef } from 'react'
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi'
import { FormHandles } from '@unform/core'
import { Form } from '@unform/web'
import * as Yup from 'yup'

import AuthContext from '../../context/AuthContext'
import getValidationErrors from '../../utils/getValidationErrors'

import logoImg from '../../assets/logo.svg'

import { Background, Container, Content } from './styles'

import Input from '../../components/Input'
import Button from '../../components/Button'

interface DataForm {
	email: string
	password: string
}

const SignIn: React.FC = () => {
	const formRef = useRef<FormHandles | null>(null)

	const handleSubmit = useCallback(async (data: DataForm): Promise<void> => {
		try {
			formRef.current?.setErrors({})

			const schema = Yup.object().shape({
				email: Yup.string()
					.required('E-mail obrigatório')
					.email('Digite um e-mail válido'),
				password: Yup.string().required('Senha obrigatória'),
			})

			await schema.validate(data, {
				abortEarly: false,
			})
		} catch (error) {
			const errors = getValidationErrors(error)

			formRef.current?.setErrors(errors)
		}
	}, [])

	return (
		<Container>
			<Content>
				<img src={logoImg} alt="Go Barber" />

				<Form ref={formRef} onSubmit={handleSubmit}>
					<h1>Faça seu logon</h1>

					<Input name="email" icon={FiMail} placeholder="E-mail" />

					<Input
						name="password"
						icon={FiLock}
						type="password"
						placeholder="Senha"
					/>

					<Button type="submit">Entrar</Button>

					<a href="forgot">Esqueci minha senha</a>
				</Form>

				<a href="login">
					<FiLogIn />
					Criar conta
				</a>
			</Content>
			<Background />
		</Container>
	)
}

export default SignIn