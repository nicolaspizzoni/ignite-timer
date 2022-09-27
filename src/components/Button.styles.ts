import styled, { css } from 'styled-components'

export type ButtonVariants = 'primary' | 'secondary'

interface ButtonContainerProps {
  variant: ButtonVariants
}

const ButtonVariant = {
  primary: 'purple',
  secondary: 'green',
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  height: 80px;
  width: 100px;
  border: 0;
  border-radius: 4px;
  color: ${({ theme }) => theme.white};
  margin: 8px;

  background-color: ${({ theme }) => theme['green-500']};

  /* ${({ variant }) => {
    return css`
      background-color: ${ButtonVariant[variant]};
    `
  }} */
`
