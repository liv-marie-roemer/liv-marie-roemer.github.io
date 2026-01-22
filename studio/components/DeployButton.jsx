import {Card, Button, Stack, Text} from '@sanity/ui'
import {useState} from 'react'

export default function DeployButton() {
  const [isDeploying, setIsDeploying] = useState(false)
  const [status, setStatus] = useState('')

  const triggerDeploy = async () => {
    setIsDeploying(true)
    setStatus('Triggering deployment...')

    try {
      // GitHub Personal Access Token should be stored in environment variable
      const token = import.meta.env.SANITY_STUDIO_GITHUB_TOKE

      if (!token) {
        setStatus('Error: GitHub token not configured')
        setIsDeploying(false)
        return
      }

      const response = await fetch(
        'https://api.github.com/repos/liv-marie-roemer/liv-marie-roemer.github.io/actions/workflows/deploy.yml/dispatches',
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/vnd.github.v3+json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ref: 'main',
          }),
        }
      )

      if (response.status === 204) {
        setStatus('✅ Deployment triggered successfully!')
      } else {
        setStatus(`❌ Failed to trigger deployment (${response.status})`)
      }
    } catch (error) {
      setStatus(`❌ Error: ${error.message}`)
    } finally {
      setIsDeploying(false)
    }
  }

  return (
    <Card padding={4} radius={2} shadow={1}>
      <Stack space={3}>
        <Text size={2} weight="semibold">
          Deploy to GitHub Pages
        </Text>
        <Text size={1} muted>
          Trigger a new build and deployment of your website
        </Text>
        <Button
          text="Deploy Now"
          tone="primary"
          onClick={triggerDeploy}
          disabled={isDeploying}
          loading={isDeploying}
        />
        {status && (
          <Text size={1} muted>
            {status}
          </Text>
        )}
      </Stack>
    </Card>
  )
}
