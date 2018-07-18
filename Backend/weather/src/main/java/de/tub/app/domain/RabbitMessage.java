package de.tub.app.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import java.util.Date;
import java.util.LinkedHashMap;
import java.util.List;

/**
 *
 * @author Naveed Kamran
 */
@JsonIgnoreProperties(ignoreUnknown = true)
public class RabbitMessage {

    public enum CommandType {
        CREATE, DELETE
    };

    private String bindingID;
    @JsonProperty("Settings")
    private String settings;
    private List condition;
//    private String conditionStr;
    private Boolean status;
    private CommandType command;
    private String category;
    private Date dateCreated;

    public RabbitMessage() {
    }

    public RabbitMessage(String bindingID, String settings, List condition, Boolean status, CommandType command) {
        this.bindingID = bindingID;
        this.settings = settings;
        this.condition = condition;
        this.status = status;
        this.command = command;
    }

    @Override
    public String toString() {
        return "RabbitMessage{" + "bindingID=" + getBindingID() + ", settings=" + getSettings() + ", condition=" + getCondition() + ", status=" + getStatus() + ", command=" + getCommand() + '}';
    }

    public Condition getConditionAsCondition() {
        if (this.getCondition() == null || this.getCondition().isEmpty()) {
            return null;
        }

        LinkedHashMap<String, Object> conditionMap = (LinkedHashMap) this.getCondition().get(0);

        Condition condition = new Condition();
        condition.setLon(Double.parseDouble(conditionMap.get("lon").toString()));
        condition.setLat(Double.parseDouble(conditionMap.get("lat").toString()));
        condition.setValue((String) conditionMap.get("value"));

        return condition;
    }

    /**
     * @return the bindingID
     */
    public String getBindingID() {
        return bindingID;
    }

    /**
     * @param bindingID the bindingID to set
     */
    public void setBindingID(String bindingID) {
        this.bindingID = bindingID;
    }

    /**
     * @return the settings
     */
    public String getSettings() {
        return settings;
    }

    /**
     * @param settings the settings to set
     */
    public void setSettings(String settings) {
        this.settings = settings;
    }

    /**
     * @return the condition
     */
    public List getCondition() {
        return condition;
    }

    /**
     * @param condition the condition to set
     */
    public void setCondition(List condition) {
        this.condition = condition;
    }

    /**
     * @return the status
     */
    public Boolean getStatus() {
        return status;
    }

    /**
     * @param status the status to set
     */
    public void setStatus(Boolean status) {
        this.status = status;
    }

    /**
     * @return the command
     */
    public CommandType getCommand() {
        return command;
    }

    /**
     * @param command the command to set
     */
    public void setCommand(CommandType command) {
        this.command = command;
    }

    /**
     * @return the category
     */
    public String getCategory() {
        return category;
    }

    /**
     * @param category the category to set
     */
    public void setCategory(String category) {
        this.category = category;
    }

    /**
     * @return the dateCreated
     */
    public Date getDateCreated() {
        return dateCreated;
    }

    /**
     * @param dateCreated the dateCreated to set
     */
    public void setDateCreated(Date dateCreated) {
        this.dateCreated = dateCreated;
    }

//    /**
//     * @return the conditionStr
//     */
//    public String getConditionStr() {
//        return conditionStr;
//    }
//
//    /**
//     * @param conditionStr the conditionStr to set
//     */
//    public void setConditionStr(String conditionStr) {
//        this.conditionStr = conditionStr;
//    }
}
