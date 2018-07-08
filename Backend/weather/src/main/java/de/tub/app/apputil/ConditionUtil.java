package de.tub.app.apputil;

import java.util.Map;
import java.util.Set;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

/**
 *
 * @author Naveed Kamran
 */
@Component
public class ConditionUtil {

    @Autowired
    private ObjFactory objFactory;

//    enum TokenType {
//
//        CONSTANT, VARIABLE, OPERATOR, OPERAND
//    }
//
//    enum Operator {
//
//        LT, GT, LT_ET, GT_ET, CONTAINS, NOT
//    }
    /**
     * conditions main.temp < 20 in berlin @param
     *
     * @param map
     * @param condition
     * @return
     */
    public boolean checkCondition(Map<String, Object> map, String condition) {
        condition = condition.replaceAll("  ", " ");
        String tokens[] = condition.split(" ");
        String tokensInfo[] = new String[tokens.length];

        for (int i = 0; i < tokens.length; i++) {
            tokensInfo[i] = getTokenInfo(tokens[i], map.keySet());
        }

        System.out.println("Conditions recogined as =============================== ");
        for (int i = 0; i < tokens.length; i++) {
            System.out.println(tokens[i] + "=" + tokensInfo[i]);
        }

        for (int i = 0; i < tokens.length; i++) {
            if (tokensInfo[i].equals("variable")) {
                if (tokensInfo[i + 1].equals("operator.gt")) {
                    return (new Double(map.get(tokens[i]).toString()) > new Double(tokens[i + 2]));
                } else if (tokensInfo[i + 1].equals("operator.lt")) {
                    return (new Double(map.get(tokens[i]).toString()) < new Double(tokens[i + 2]));
                } else if (tokensInfo[i + 1].equals("operator.gteq")) {
                    return (new Double(map.get(tokens[i]).toString()) >= new Double(tokens[i + 2]));
                } else if (tokensInfo[i + 1].equals("operator.lteq")) {
                    return (new Double(map.get(tokens[i]).toString()) <= new Double(tokens[i + 2]));
                } else if (tokensInfo[i + 1].equals("operator.eq")) {
                    return (new Double(map.get(tokens[i]).toString()).equals(new Double(tokens[i + 2])));
                } else if (tokensInfo[i + 1].equals("operator.eq")) {
                    return !(new Double(map.get(tokens[i]).toString()).equals(new Double(tokens[i + 2])));
                }
            }
        }

        return true;
    }

    private String getTokenInfo(Object input, Set<String> vars) {
        if (input == null) {
            return null;
        } else if (vars.contains(input.toString())) {
            return "variable";
        } else if (isParsableAsLong(input.toString())) {
            return "dt.long";
        } else if (isParsableAsDouble(input.toString())) {
            return "dt.double";
        } else if (input instanceof String) {
            String inputStr = input.toString();
            if (inputStr.equals("=") || inputStr.equals("==") || inputStr.equals("===") || inputStr.equalsIgnoreCase("et")) {
                return "operator.eq";
            } else if (inputStr.equals("!=") || inputStr.equals("!=") || inputStr.equals("!==") || inputStr.equalsIgnoreCase("ne")) {
                return "operator.ne";
            } else if (inputStr.equals("!") || inputStr.equalsIgnoreCase("not")) {
                return "operator.not";
            } else if (inputStr.equals("<") || inputStr.equalsIgnoreCase("lt")) {
                return "operator.lt";
            } else if (inputStr.equals(">") || inputStr.equalsIgnoreCase("gt")) {
                return "operator.gt";
            } else if (inputStr.equals("<=") || inputStr.equalsIgnoreCase("ltet")) {
                return "operator.ltet";
            } else if (inputStr.equals(">=") || inputStr.equalsIgnoreCase("gtet")) {
                return "operator.gtet";
            } else if (inputStr.equalsIgnoreCase("contains")) {
                return "operator.contains";
            }
        }

        return null;
    }

    private boolean isParsableAsLong(final String s) {
        try {
            Long.valueOf(s);
            return true;
        } catch (NumberFormatException numberFormatException) {
            return false;
        }
    }

    private boolean isParsableAsDouble(final String s) {
        try {
            Double.valueOf(s);
            return true;
        } catch (NumberFormatException numberFormatException) {
            return false;
        }
    }
}
