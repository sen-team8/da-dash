# Contributing to DA-Dash
DA-Dash is open to contribute for following 9 developers.
- Kushan (@kepta)
- Kuljeet (@KuljeetJ)
- Nihit (@Nihitavr)
- Vadhir (@flibertigibet)
- Dushyant (@Dushyant7)
- Barkha (@barkhabhojak)
- Nidhi (@berzentine)
- Saloni (@Salonij18)
- Deergha (@Deergh)

## Creating a Pull Request(PR)
Follow the guidelines to create pull request

- Make your changes in a new git branch:

     ```shell
     git checkout -b issueName
     ```

- Follow the coding conventions and use eslint.
- Commit your changes using a descriptive commit message.

     ```shell
     git commit
     ```
  Note: the optional commit `-a` command line option will automatically "add" and "rm" edited files.

- Push your branch to GitHub:

    ```shell
    git push origin issueName
    ```

- If any changes suggested:
  - Make the required updates.
  - Commit your changes to your branch (e.g. `issueName`).
  - Push the changes to your GitHub repository (this will update your Pull Request).


#### After your pull request is merged

After PR is merged, you can safely delete your branch and pull the changes
from the main (upstream) repository:

- Delete the remote branch on GitHub either through the GitHub web UI or your local shell as follows:

    ```shell
    git push origin --delete issueName
    ```

- Check out the master branch:

    ```shell
    git checkout master
    ```

- Delete the local branch:

    ```shell
    git branch -D issueName
    ```

- Update your master with the latest upstream version:

    ```shell
    git pull --ff upstream master
    ```
