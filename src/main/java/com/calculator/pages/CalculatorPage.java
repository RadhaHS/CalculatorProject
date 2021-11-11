package com.calculator.pages;

import java.util.List;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.calculator.constant.Constants;
import com.calculator.testBase.TestBase;

public class CalculatorPage extends TestBase {

	public CalculatorPage() {
		PageFactory.initElements(driver, this);
	}

	@FindBy(id = "add")
	WebElement add;

	@FindBy(id = "subtract")
	WebElement subtract;

	@FindBy(id = "multiply")
	WebElement multiply;

	@FindBy(id = "divide")
	WebElement divide;
	@FindBy(id = "display")
	WebElement display;

	@FindBy(xpath = "//input[@class='double-x'][@value='C']")
	WebElement cancel;

	@FindBy(xpath = "//input[@class='double-x'][@value='0']")
	WebElement zero;

	@FindBy(xpath = "//input[@class='double-y'][@value='=']")
	WebElement equals;

	@FindBy(xpath = "//input[@class='small']")
	List<WebElement> allNums;

	public void selectANumber(String selectnum) {

//		23 -> press 2 then press 3 
		new WebDriverWait(driver, Constants.EXPLICIT_WAIT)
				.until(ExpectedConditions.elementToBeClickable(allNums.get(0)));

		selectnum.chars().mapToObj(c -> (char) c).forEach(number -> {
//			allNums.stream().filter(num -> num.getText().trim().charAt(0) == number).findFirst().get().click();
			if (number != '0')
				for (int i = 0; i < allNums.size(); i++) {
					System.out.println(allNums.get(i).getAttribute("value") + " " + number);
					if (allNums.get(i).getAttribute("value").trim().charAt(0) == number)
						allNums.get(i).click();
				}
			else
				zero.click();
		});

	}

	public void clickCancel() {
		new WebDriverWait(driver, Constants.EXPLICIT_WAIT).until(ExpectedConditions.elementToBeClickable(cancel));
		cancel.click();
	}

	public void clickEqual() {
		new WebDriverWait(driver, Constants.EXPLICIT_WAIT).until(ExpectedConditions.elementToBeClickable(equals));
		equals.click();
	}

	public void clickAdd() {
		add.click();
	}

	public void clickSubtract() {
		subtract.click();
	}

	public void clickDivision() {
		new WebDriverWait(driver, Constants.EXPLICIT_WAIT).until(ExpectedConditions.elementToBeClickable(divide));
		divide.click();
	}

	public void clickMultiplication() {
		multiply.click();
	}

	public String getDisplayedNumber() {
		return display.getText();
	}

	public String getDisplayedError() {
		return display.getText();
	}
}
