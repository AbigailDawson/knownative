import { Octokit } from '@octokit/core';

export async function getPullRequests() {
  const octokit = new Octokit({
    auth: import.meta.env.VITE_GITHUB_TOKEN
  });

  const response = await octokit.request('GET /repos/abigaildawson/knownative/pulls', {
    owner: 'abigaildawson',
    repo: 'knownative',
    state: 'all',
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  });

  console.log(response.data);
  return response.data;
}
