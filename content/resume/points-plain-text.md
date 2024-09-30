# Red Hat
1. Reduced deployment time by 66% by implementing ability to deploy locally-compiled binaries onto Kubernetes/OpenShift using only command-line (Kubernetes/GoLang used for this and three below).
2. Implemented ability for Kubernetes operator to fetch data from a deployed service and update config with data to deprecate reliance on startup script.
3. Added startup probes to handle starting legacy application containers that require additional startup time.
4. Refactored probes to have default values assigned based on deployed YAML while also fixing reconciliation issues.
5. Rewrote the Jenkins (Groovy) nightly pipeline to run in a GitHub PR using a trigger keyword to test all the team’s submitted PR’s before merging to the main branch.
6. Took on tasks and contributed ideas in Agile sprint planning meetings in a team of 12 people.
7. Took initiative to write file to define the GitHub parameters for the above pipeline so that it can be recreated easily.
8. Took initiative to write documentation on how to get started with the project to onboard new developers and mentored the incoming intern.
