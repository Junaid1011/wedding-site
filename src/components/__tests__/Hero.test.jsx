import { render, screen } from '@testing-library/react'
import Hero from '../Hero'
import { describe, it, expect } from 'vitest'

describe('Hero Component', () => {
    it('renders the couple names', () => {
        render(<Hero />)
        expect(screen.getByText(/Kajal & Junaid/i)).toBeInTheDocument()
    })

    it('renders the wedding date', () => {
        render(<Hero />)
        expect(screen.getByText(/February 13, 2026/i)).toBeInTheDocument()
    })
})
