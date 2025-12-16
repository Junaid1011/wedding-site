import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import RSVP from '../RSVP'
import { describe, it, expect, vi, beforeEach } from 'vitest'

// Mock fetch
global.fetch = vi.fn()

describe('RSVP Component', () => {
    beforeEach(() => {
        vi.clearAllMocks()
    })

    it('renders the form fields', () => {
        render(<RSVP />)
        expect(screen.getByLabelText(/Full Name/i)).toBeInTheDocument()
        expect(screen.getByLabelText(/Email Address/i)).toBeInTheDocument()
        expect(screen.getByLabelText(/Guests/i)).toBeInTheDocument()
        expect(screen.getByLabelText(/Attending/i)).toBeInTheDocument()
    })

    it('submits the form with correct data', async () => {
        fetch.mockResolvedValueOnce({ ok: true })

        render(<RSVP />)

        fireEvent.change(screen.getByLabelText(/Full Name/i), { target: { value: 'Test User' } })
        fireEvent.change(screen.getByLabelText(/Email Address/i), { target: { value: 'test@example.com' } })

        const submitButton = screen.getByRole('button', { name: /Confirm Attendance/i })
        fireEvent.click(submitButton)

        await waitFor(() => {
            expect(fetch).toHaveBeenCalledTimes(1)
        })

        // Check if fetch was called with the correct URL
        expect(fetch).toHaveBeenCalledWith(
            expect.stringContaining('script.google.com'),
            expect.objectContaining({
                method: 'POST',
            })
        )
    })
})
