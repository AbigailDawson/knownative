const contributions = [
  {
    id: 1,
    title: 'Project A',
    contributors: [101, 102],
  },
  {
    id: 2,
    title: 'Project B',
    contributors: [103, 104],
  }
]

const contributors = [
  {
    id: 101,
    name: 'Paul Santos',
    role: 'Developer',
  },
  {
    id: 102,
    name: 'Zephyr Worthington',
    role: 'Back-End Developer',
  },
  {
    id: 103,
    name: 'Ellie Wright',
    role: 'Front-End Developer',
  },
  {
    id: 104,
    name: 'Christina Pham',
    role: 'UX/UI Designer',
  }
]

const enrichedContributions = contributions.map(contribution => {
  return {
    ...contribution,
    contributors: contribution.contributors.map(contributorId => {
      return contributors.find(contributor => contributor.id === contributorId)
    })
  }
})

console.log(JSON.stringify(enrichedContributions, null, 2));
export default { contributions, contributors, enrichedContributions };
