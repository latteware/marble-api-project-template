## [Project name]

## After download

After clone do

```
git reset $(git commit-tree HEAD^{tree} -m "A new start")
```

To get a new history, then point to the correct package

```
git remote set-url origin [Git repo]
```

Update the `package.json` file with the new name of you module and its repo

**Happy coding :)**

Then remove this part and write the docs of your package


## Docs

After download install all modules with

```
npm i
```

Run server with

```
npm run start
```

