# KonKet

A modern Single Page App implemented in Svelte. Intended to replace [KonOpas](https://github.com/eemeli/konopas).

To run: 
You need a server that serves the schedule data. AFAIK, Zambia does not yet support any REST API. We'll solve that problem
later. For now, to develop locally, run a very minimal litte server to provide fake data:
```
bash
cd fake_data_server/
nodemon report.js
```

Leave that process running in one Terminal window. Notice that if you edit program.js, nodeman will re-start this server,
and the updated data will be served. This allows us to test the "Refresh Data" functionality of KonKat.

To run KonKat itself, from the konkat directory, run:

```
npm run dev
```

## Building and running in production mode

(This section held over from the Svelte Template readme)

To create an optimised version of the app:

```bash
npm run build
```

You can run the newly built app with `npm run start`. This uses [sirv](https://github.com/lukeed/sirv), which is included in your package.json's `dependencies` so that the app will work when you deploy to platforms like [Heroku](https://heroku.com).


