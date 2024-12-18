#!/usr/bin/env bash
# Install foundryup and foundry toolkit (forge, cast, anvil)


# If already forge installed, exit. (we do not care about cast or anvil
if [ "${FORCE}" != "true" ] && which forge 1>/dev/null; then
  echo "Foundry already installed: $(forge --version)."
  echo "Run 'foundryup' to update."
  return
fi

# This tells https://foundry.paradigm.xyz where to install foundryup -
# $FOUNDRY_DIR/bin. This dir is added to $GITHUB_PATH in
# .github/workflows/pre-commit.yaml
export FOUNDRY_DIR="$HOME/.foundry";


# If foundryup not installed, install it
if ! which foundryup 1>/dev/null; then
  echo "Installing foundryup"
  curl -L https://foundry.paradigm.xyz | bash
fi


foundryup --version $(cat scripts/foundry_version.txt)
