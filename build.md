To deploy this package to Atmosphere one needs permission. I am currently trying to move this package to a Meteor Organization while keeping the stars and download stats. I have filed an issue on the Meteor Github issue tracker. I will however write the guide assuming permission.

1. git clone the repo into a local file dir

2. Add these lines in your .bashrc or .zshrc when testing (assuming meteor-leaflet is in /foo/bar) - this will use the local package and not the Atmosphere package
  ```bash
    # for meteor local package development
    export METEOR_PACKAGE_DIRS=/foo/bar
  ```

3. git clone the meteor-leaflet-demo app into a local dir

4. After making changes if using meteor run in meteor-leaflet-demo the meteor-leaflet package will auto-update or if just in the CLI and in meteor-leaflet run following command in the meteor-leaflet-demo folder:
  ```bash
    meteor update
  ```
5. Ensure you have git branched meteor-leaflet and submit your PR while done (remember to increment the semver of the package - unless just a readme update)

6. The PR will be reviewed and merged by another team member (most likely the owner)

7. Tag the release (Atmosphere doesn't require it but it is best practice)

8. In the meteor-leaflet dir - login to your meteor account (if not already)

9a. run this command on the CLI in the meteor-leaflet dir if updating code:
  ```bash
    meteor publish
  ```

9b. run this command if you are just updating the readme:
  ```bash
    meteor publish --update
  ```
final step: Comment out the line added in your .zshrc or .bashrc in step 2 when done
