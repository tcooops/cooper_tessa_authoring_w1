<?php
    // include the CONNECT.PHP file
    include("connect.php");

    $query = "SELECT * FROM tbl_profData";  // selects ALL from the table with our Professor Data

    $runQuery = $pdo->query($query);  // this asks for the statement above (select all from prof data) and runs the query. PDO means portable data object.

    $result = array();

    while($row = $runQuery->fetchAll(PDO::FETCH_ASSOC)) {
        $result[] = $row;
    } // note: no semi-colon needed after the while statement. It is a body with curly braces so no need for a semi-colon. 

    //return $result;
    echo (json_encode($result));