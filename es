#!/bin/bash
# budlabs

ERX() { >&2 echo "$*" && exit 1 ; }

[[ -n ${trg:=$(which "$1" 2> /dev/null)} || -f ${trg:=$1}  ]] && {
	trg=$(file --mime "$(readlink -f "$trg")")

	[[ $trg =~ ^(.+):[[:space:]]text/.+  ]] \
	  && exec vim "${BASH_REMATCH[1]}"

	  ERX "$1" is not a text file
}
ERX "$1" not found
