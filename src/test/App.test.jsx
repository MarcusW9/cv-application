import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { test, expect } from 'vitest'
import App from '../App.jsx'

test('should render disabled remove experience button', async () => {
  // 1. Set up user event
  const user = userEvent.setup()
  render(<App />)

  // 2. Find the remove button and check it's disabled initially (length = 1)
  const removeButton = screen.getByRole('button', {
    name: /remove experience/i,
  })
  expect(removeButton).toBeDisabled()

  // 3. Find and click the "Add Experience" button to increase the array length to 2
  const addButton = screen.getByRole('button', { name: /add experience/i })
  await user.click(addButton)

  // 4. Verify the remove button is now active (enabled)
  const removeButtons = screen.getAllByRole('button', {
    name: /remove experience/i,
  })
  expect(removeButtons[0]).not.toBeDisabled()

  // 5. Remove the button
  await user.click(removeButton)

  // 6. Now the remove should be disabled again
  const secondRemoveButton = screen.getByRole('button', {
    name: /remove experience/i,
  })
  expect(secondRemoveButton).toBeDisabled()
})
