
#  /bin/bash

tests/qa-maintenance-list
status=$?

# report dir should exist and be bound to a named volume
cp -r playwright-report/* /report

exit $status