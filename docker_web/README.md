# Docker image for accessing restic-browser with a web browser

An example docker compose file that uses this container looks something like the following. Note
that there is no pre-built image at the moment meaning that each user has to build the image
themselves (e.g., `docker compose build`) before starting the respective compose stack.

```yaml
version: '2'

services:
  restic-browser:
    build:
      context: https://github.com/niosHD/restic-browser.git#docker-web
      dockerfile: Dockerfile.web
    ports:
      - "5800:5800"  # noVNC web interface
    environment:
      # When using local backups, set user and group ID that match the permissions of your mount.
      - USER_ID=1000
      - GROUP_ID=100
      # Define the default repository and password if desired.
      # - RESTIC_REPOSITORY=<repo-path-or-url>
      # - RESTIC_PASSWORD=<password>
    volumes:
      # Mount local backups that you want to inspect with restic-browser.
      - '/<path_to_backups>:/backups'
      # Mount the config directory either locally or in a volume to preserve configs.
      - './data/restic-browser-config:/config/xdg/config/org.restic.browser/'
```
